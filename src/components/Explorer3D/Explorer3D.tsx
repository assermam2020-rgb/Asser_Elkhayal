import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Language } from '../../types';
import { MODELS_3D_CATALOG, Model3DItem } from '../../data/models3d';
import {
  Volume2,
  RotateCcw,
  Maximize2,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Info,
  CheckCircle,
  Eye,
  Layers,
} from 'lucide-react';
import { speakText, stopSpeech } from '../../utils/speech';
import { playClickSound } from '../../utils/audioEffects';

interface Explorer3DProps {
  language: Language;
}

export const Explorer3D: React.FC<Explorer3DProps> = ({ language }) => {
  const isAr = language === 'ar';
  const mountRef = useRef<HTMLDivElement>(null);

  const [selectedModelId, setSelectedModelId] = useState<string>('atom');
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1.0);
  const [activeLabelIdx, setActiveLabelIdx] = useState<number>(0);
  const [hudCollapsed, setHudCollapsed] = useState<boolean>(false);

  const currentModelData = MODELS_3D_CATALOG.find((m) => m.id === selectedModelId) || MODELS_3D_CATALOG[0];

  // Three.js refs to manipulate without re-initializing canvas
  const sceneRef = useRef<THREE.Scene | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Audio narration
  const handleNarrateModel = () => {
    playClickSound();
    const text = isAr
      ? `نموذج: ${currentModelData.nameAr}. ${currentModelData.subtitleAr}. ${currentModelData.descriptionAr}`
      : `Model: ${currentModelData.nameEn}. ${currentModelData.subtitleEn}. ${currentModelData.descriptionEn}`;
    speakText(text, language);
  };

  // Build Procedural 3D Model Group for the selected ID
  const constructModelGroup = (id: string, isWireframe: boolean): THREE.Group => {
    const group = new THREE.Group();

    if (id === 'atom') {
      // 1. Central Nucleus Cluster (Protons + Neutrons)
      const nucleusGroup = new THREE.Group();
      const protonMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        roughness: 0.3,
        metalness: 0.2,
        wireframe: isWireframe,
      });
      const neutronMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.4,
        metalness: 0.1,
        wireframe: isWireframe,
      });
      const sphereGeo = new THREE.SphereGeometry(0.35, 16, 16);

      // Nucleus pack of 12 spheres
      for (let i = 0; i < 12; i++) {
        const phi = Math.acos(-1 + (2 * i) / 12);
        const theta = Math.sqrt(12 * Math.PI) * phi;
        const mesh = new THREE.Mesh(sphereGeo, i % 2 === 0 ? protonMat : neutronMat);
        mesh.position.set(
          0.6 * Math.cos(theta) * Math.sin(phi),
          0.6 * Math.sin(theta) * Math.sin(phi),
          0.6 * Math.cos(phi)
        );
        nucleusGroup.add(mesh);
      }
      group.add(nucleusGroup);

      // 2. Electron Shell Rings & Orbiting Electrons
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      const electronMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.8,
        roughness: 0.2,
      });
      const electronGeo = new THREE.SphereGeometry(0.16, 12, 12);

      const shellRadii = [2.2, 3.4, 4.6];
      shellRadii.forEach((r, idx) => {
        const ringGeo = new THREE.TorusGeometry(r, 0.03, 8, 48);
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2 + (idx * Math.PI) / 6;
        ringMesh.rotation.y = (idx * Math.PI) / 4;
        group.add(ringMesh);

        // Add 2 to 4 electrons per shell
        const eCount = 2 + idx * 2;
        for (let e = 0; e < eCount; e++) {
          const eMesh = new THREE.Mesh(electronGeo, electronMat);
          const angle = (e / eCount) * 2 * Math.PI;
          eMesh.position.set(r * Math.cos(angle), 0, r * Math.sin(angle));
          ringMesh.add(eMesh);
        }
      });
    } else if (id === 'water-molecule') {
      // Oxygen Central Red/White Atom (Radius 1.2)
      const oxygenMat = new THREE.MeshStandardMaterial({
        color: 0xdc2626,
        roughness: 0.2,
        metalness: 0.1,
        wireframe: isWireframe,
      });
      const oxygen = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), oxygenMat);
      group.add(oxygen);

      // Two Hydrogens at 104.5 degrees
      const hydrogenMat = new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.3,
        metalness: 0.1,
        wireframe: isWireframe,
      });
      const hydrogenGeo = new THREE.SphereGeometry(0.65, 24, 24);

      const h1 = new THREE.Mesh(hydrogenGeo, hydrogenMat);
      const angle1 = (104.5 / 2) * (Math.PI / 180);
      h1.position.set(1.8 * Math.sin(angle1), -1.8 * Math.cos(angle1), 0);
      group.add(h1);

      const h2 = new THREE.Mesh(hydrogenGeo, hydrogenMat);
      h2.position.set(-1.8 * Math.sin(angle1), -1.8 * Math.cos(angle1), 0);
      group.add(h2);

      // Covalent Bond Cylinders
      const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4 });
      const bondGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.6, 16);

      const b1 = new THREE.Mesh(bondGeo, bondMat);
      b1.position.copy(h1.position).multiplyScalar(0.5);
      b1.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), h1.position.clone().normalize());
      group.add(b1);

      const b2 = new THREE.Mesh(bondGeo, bondMat);
      b2.position.copy(h2.position).multiplyScalar(0.5);
      b2.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), h2.position.clone().normalize());
      group.add(b2);
    } else if (id === 'dna-helix') {
      // DNA Double Helix
      const backboneMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3, wireframe: isWireframe });
      const rungsGroup = new THREE.Group();
      const nodeGeo = new THREE.SphereGeometry(0.18, 12, 12);
      const bridgeGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 12);
      const colors = [0xef4444, 0x10b981, 0x3b82f6, 0xf59e0b]; // A, T, C, G

      const steps = 30;
      for (let i = 0; i < steps; i++) {
        const y = (i - steps / 2) * 0.3;
        const angle = i * 0.45;

        // Strand 1 node
        const n1 = new THREE.Mesh(nodeGeo, backboneMat);
        n1.position.set(1.2 * Math.cos(angle), y, 1.2 * Math.sin(angle));
        group.add(n1);

        // Strand 2 node (opposite)
        const n2 = new THREE.Mesh(nodeGeo, backboneMat);
        n2.position.set(1.2 * Math.cos(angle + Math.PI), y, 1.2 * Math.sin(angle + Math.PI));
        group.add(n2);

        // Base-pair connecting bridge
        const pairMat = new THREE.MeshStandardMaterial({ color: colors[i % 4], roughness: 0.4 });
        const bridge = new THREE.Mesh(bridgeGeo, pairMat);
        bridge.position.set(0, y, 0);
        bridge.rotation.z = Math.PI / 2;
        bridge.rotation.y = angle;
        rungsGroup.add(bridge);
      }
      group.add(rungsGroup);
    } else if (id === 'solar-system') {
      // Sun in center
      const sunMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.9,
        wireframe: isWireframe,
      });
      const sun = new THREE.Mesh(new THREE.SphereGeometry(1.6, 32, 32), sunMat);
      group.add(sun);

      // Planetary orbits & planets
      const planetsData = [
        { r: 2.8, size: 0.22, color: 0x94a3b8 }, // Mercury
        { r: 3.8, size: 0.35, color: 0xfbbf24 }, // Venus
        { r: 5.0, size: 0.38, color: 0x3b82f6 }, // Earth
        { r: 6.2, size: 0.28, color: 0xef4444 }, // Mars
        { r: 8.0, size: 0.85, color: 0xd97706 }, // Jupiter
        { r: 10.2, size: 0.72, color: 0xfef08a }, // Saturn
      ];

      planetsData.forEach((p, idx) => {
        // Orbit line
        const orbit = new THREE.Mesh(
          new THREE.TorusGeometry(p.r, 0.02, 6, 64),
          new THREE.MeshBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.4 })
        );
        orbit.rotation.x = Math.PI / 2;
        group.add(orbit);

        // Planet Mesh
        const pMesh = new THREE.Mesh(
          new THREE.SphereGeometry(p.size, 16, 16),
          new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.4 })
        );
        const theta = idx * 1.1;
        pMesh.position.set(p.r * Math.cos(theta), 0, p.r * Math.sin(theta));
        group.add(pMesh);
      });
    } else if (id === 'earth-layers') {
      // Earth Cutaway Layers (Inner Core, Outer Core, Mantle, Crust)
      const layers = [
        { r: 0.8, color: 0xfef08a, name: 'Inner Core' },
        { r: 1.5, color: 0xf97316, name: 'Outer Core' },
        { r: 2.3, color: 0xb45309, name: 'Mantle' },
        { r: 2.7, color: 0x0284c7, name: 'Crust' },
      ];

      layers.forEach((l) => {
        // 3/4 sphere showing cross-section interior
        const geo = new THREE.SphereGeometry(l.r, 32, 16, 0, Math.PI * 1.5, 0, Math.PI);
        const mat = new THREE.MeshStandardMaterial({
          color: l.color,
          roughness: 0.4,
          wireframe: isWireframe,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);
      });
    } else if (id === 'human-heart') {
      // Anatomical Heart procedural geometry
      const heartMat = new THREE.MeshStandardMaterial({
        color: 0xbe123c,
        roughness: 0.35,
        wireframe: isWireframe,
      });
      const aortaMat = new THREE.MeshStandardMaterial({
        color: 0x9f1239,
        roughness: 0.3,
      });

      // Main Ventricles Body (Lathe / deformed capsule)
      const ventricles = new THREE.Mesh(new THREE.DodecahedronGeometry(2.0, 3), heartMat);
      ventricles.scale.set(0.9, 1.3, 0.9);
      group.add(ventricles);

      // Aorta Arch Curve (Torus / Tubes)
      const aortaArch = new THREE.Mesh(
        new THREE.TorusGeometry(0.8, 0.28, 16, 32, Math.PI),
        aortaMat
      );
      aortaArch.position.set(0, 1.8, 0);
      aortaArch.rotation.z = Math.PI / 4;
      group.add(aortaArch);
    } else if (id === 'volcano') {
      // Volcano 3D cone with caldera and lava
      const coneMat = new THREE.MeshStandardMaterial({
        color: 0x442a1d,
        roughness: 0.8,
        wireframe: isWireframe,
      });
      const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 3.2, 3.0, 24), coneMat);
      group.add(cone);

      const lavaMat = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0xdc2626,
        emissiveIntensity: 0.8,
      });
      const caldera = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.4, 0.4, 16), lavaMat);
      caldera.position.y = 1.4;
      group.add(caldera);
    } else {
      // Default: Cellular / Biological Organelle Sphere cluster
      const cellMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.7,
        roughness: 0.2,
        wireframe: isWireframe,
      });
      const outerCell = new THREE.Mesh(new THREE.SphereGeometry(2.4, 32, 32), cellMat);
      group.add(outerCell);

      // Nucleus in center
      const nucleusMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });
      const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.9, 24, 24), nucleusMat);
      group.add(nucleus);

      // Mitochondria / Organelles floating inside
      const mitoMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3 });
      for (let i = 0; i < 5; i++) {
        const mito = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.5, 8, 12), mitoMat);
        mito.position.set(
          1.4 * Math.sin(i * 1.3),
          1.2 * Math.cos(i * 1.5),
          1.1 * Math.sin(i * 2.1)
        );
        group.add(mito);
      }
    }

    return group;
  };

  // Setup Three.js scene once
  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Detect software GL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030712); // Deep dark space
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Environment Lighting
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-Point Light Rig
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    fillLight.position.set(-6, -4, -6);
    scene.add(fillLight);

    const hemiLight = new THREE.HemisphereLight(0xbae6fd, 0x0f172a, 1.0);
    scene.add(hemiLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 25;
    controlsRef.current = controls;

    // Build initial model
    const initialGroup = constructModelGroup(selectedModelId, wireframeMode);
    scene.add(initialGroup);
    modelGroupRef.current = initialGroup;

    // Render loop
    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (autoRotate && modelGroupRef.current) {
        modelGroupRef.current.rotation.y += 0.005 * rotationSpeed;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize listener
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, []);

  // Update Model Group when selectedModelId or wireframeMode changes
  useEffect(() => {
    if (!sceneRef.current) return;

    if (modelGroupRef.current) {
      sceneRef.current.remove(modelGroupRef.current);
      // Clean up geometries and materials
      modelGroupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }

    const newGroup = constructModelGroup(selectedModelId, wireframeMode);
    sceneRef.current.add(newGroup);
    modelGroupRef.current = newGroup;
    setActiveLabelIdx(0);
  }, [selectedModelId, wireframeMode]);

  return (
    <div className="space-y-6 pb-16">
      
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>{isAr ? 'مستكشف النماذج العلمية ثلاثية الأبعاد' : '3D Real-Time Spatial Science Explorer'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? currentModelData.nameAr : currentModelData.nameEn}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {isAr ? currentModelData.subtitleAr : currentModelData.subtitleEn}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleNarrateModel}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold border border-slate-700 transition-colors shadow-sm"
          >
            <Volume2 className="w-4 h-4" />
            <span>{isAr ? 'قراءة الشرح الصوتي' : 'Narrate Model'}</span>
          </button>
        </div>
      </div>

      {/* 3D Model Catalog Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
        {MODELS_3D_CATALOG.map((m) => {
          const active = selectedModelId === m.id;
          return (
            <button
              key={m.id}
              onClick={() => {
                playClickSound();
                setSelectedModelId(m.id);
              }}
              className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                active
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {isAr ? m.nameAr : m.nameEn}
            </button>
          );
        })}
      </div>

      {/* Main 3D Viewport with Collapsible Bottom Dock */}
      <div className="relative w-full h-[540px] sm:h-[600px] bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        
        {/* Three.js Canvas Mount */}
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Top-Left Model Information Overlay Pill */}
        <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10 pointer-events-none">
          <div className="bg-slate-950/85 border border-slate-800 backdrop-blur-md rounded-2xl p-4 max-w-sm text-left rtl:text-right shadow-xl">
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              {isAr ? 'العضو / المكون المختار:' : 'Selected Structure Label:'}
            </span>
            <h4 className="text-sm font-bold text-white mt-0.5">
              {isAr
                ? currentModelData.labels[activeLabelIdx]?.nameAr
                : currentModelData.labels[activeLabelIdx]?.nameEn}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {isAr
                ? currentModelData.labels[activeLabelIdx]?.descAr
                : currentModelData.labels[activeLabelIdx]?.descEn}
            </p>
          </div>
        </div>

        {/* Top-Right Quick Interaction Hint */}
        <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 hidden sm:block pointer-events-none">
          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl px-3 py-1.5 text-[11px] text-slate-400 font-mono">
            {isAr ? 'اسحب للتوليد والتدوير · عجلة الفأرة للتقريب' : 'Drag to Rotate · Scroll to Zoom'}
          </div>
        </div>

        {/* Sleek Collapsible Bottom Dock (Three.js Skill §5 Compliance) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-3xl transition-transform duration-300">
          
          {/* Collapse / Expand Toggle Tab */}
          <div className="flex justify-center -mb-px">
            <button
              onClick={() => setHudCollapsed(!hudCollapsed)}
              className="px-4 py-1.5 bg-slate-900 border border-slate-700 border-b-0 rounded-t-xl text-slate-400 hover:text-white text-xs font-semibold flex items-center gap-1.5 shadow-md"
            >
              {hudCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>{hudCollapsed ? (isAr ? 'إظهار لوحة التحكم' : 'Show Controls') : (isAr ? 'إخفاء اللوحة' : 'Hide Controls')}</span>
            </button>
          </div>

          {!hudCollapsed && (
            <div className="bg-slate-900/90 border border-slate-700 backdrop-blur-md rounded-2xl p-4 shadow-2xl space-y-3">
              
              {/* Interactive Component Labels Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {currentModelData.labels.map((lbl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playClickSound();
                      setActiveLabelIdx(idx);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors ${
                      activeLabelIdx === idx
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {isAr ? lbl.nameAr : lbl.nameEn}
                  </button>
                ))}
              </div>

              {/* Viewport Render Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                      autoRotate ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-950 text-slate-400'
                    }`}
                  >
                    {autoRotate ? (isAr ? 'دوران تلقائي: يعمل' : 'Auto-Rotate: ON') : (isAr ? 'دوران: متوقف' : 'Auto-Rotate: OFF')}
                  </button>

                  <button
                    onClick={() => setWireframeMode(!wireframeMode)}
                    className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                      wireframeMode ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'bg-slate-950 text-slate-400'
                    }`}
                  >
                    {wireframeMode ? (isAr ? 'الهيكل الشبكي: نشط' : 'Wireframe: ON') : (isAr ? 'هيكل شبكي' : 'Wireframe')}
                  </button>
                </div>

                {/* Fun Fact Badge */}
                <div className="text-[11px] text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate max-w-xs">
                    {isAr ? currentModelData.funFactsAr[0] : currentModelData.funFactsEn[0]}
                  </span>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  );
};

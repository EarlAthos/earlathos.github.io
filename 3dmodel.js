// Проверка, доступен ли GLTFLoader
if (typeof THREE.GLTFLoader === 'undefined') {
    console.error('GLTFLoader не загружен!');
}

// Инициализация сцены, камеры и рендерера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создание загрузчика GLTF
const loader = new THREE.GLTFLoader();

// Загрузка 3D модели (замените model.glb на фактическое имя вашего файла)
loader.load('House_001_GLB.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// Освещение
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Позиция камеры
camera.position.z = 5;

// Анимация
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
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
    console.error('Модель успешно загружена');
	scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// Освещение
const light = new THREE.DirectionalLight(0xffffff, 1); // Направленный свет
light.position.set(5, 5, 5); // Позиция света
scene.add(light);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Дневной свет
scene.add(ambientLight);
// Позиция камеры
camera.position.z = 10; // Увеличьте расстояние камеры от модели
scene.position.set(-5, -5, -1); // Убедитесь, что модель помещена в центр



// Создайте контроллер и передайте ему камеру и элемент рендерера
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Настройте контроллеры (опционально)
controls.enableDamping = true; // активация плавного движения
controls.dampingFactor = 0.25; // коэффициент damping
controls.screenSpacePanning = false; // отключить панорамирование по экрану



// Анимация
function animate() {
    requestAnimationFrame(animate);
	controls.update(); // обновление контроллеров
    renderer.render(scene, camera);
}
animate();
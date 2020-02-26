var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      var geometry = new THREE.BoxGeometry();
      var material = new THREE.MeshBasicMaterial({ color: 0xddff44 });
      var material2 = new THREE.MeshBasicMaterial({ color: 0xddff00 });
      let cube2 = new THREE.Mesh(geometry, material2)
      var cube = new THREE.Mesh(geometry, material);
      scene.add(cube, cube2);

      camera.position.z = 2;
      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube2.rotation.x += 0.01
        renderer.render(scene, camera);
      }
      animate();
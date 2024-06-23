// Вставьте этот скрипт в секцию <script> вашего HTML-документа

const iframe = document.getElementById('api-frame');
const uid = '353869db18f744b5953321cfa8e65a78'; // Замените на UID вашей модели

const client = new Sketchfab(iframe);
client.init(uid, {
  success: function(api) {
    api.start();
    api.addEventListener('viewerready', function() {
      console.log('Viewer is ready');

      // Слушаем изменения цвета
      document.getElementById('colorPicker').addEventListener('input', function(event) {
        const color = event.target.value;
        api.setMaterial('MaterialName', { diffuseColor: hexToRgb(color) });
      });
    });
  },
  error: function() {
    console.log('Viewer error');
  }
});

// Функция для конвертации HEX в RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r / 255, g / 255, b / 255];
}

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- Prevent scaling to ensure camera maps correctly to screen -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Lukman Shaikh | AR Portfolio</title>
    
    <!-- Load A-Frame and AR.js -->
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    
    <style>
      body {
        margin: 0;
        overflow: hidden;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      
      /* UI Overlay styling - sits on top of the camera feed */
      #ui-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
      }
      
      /* Top instructions panel */
      #instructions {
        background: rgba(10, 10, 20, 0.85);
        color: white;
        padding: 20px;
        border-radius: 16px;
        text-align: center;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        pointer-events: auto;
        max-width: 400px;
        margin: 0 auto;
      }
      
      #instructions h3 {
        margin: 0 0 12px 0;
        font-size: 1.3rem;
        background: linear-gradient(90deg, #ff3366, #ff6b33);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      #instructions p {
        margin: 8px 0;
        font-size: 0.95rem;
        color: #e2e8f0;
      }
      
      /* Button to get Hiro marker */
      .link-button {
        display: inline-block;
        margin-top: 15px;
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        border: 1px solid rgba(255, 51, 102, 0.5);
        background: rgba(255, 51, 102, 0.1);
        padding: 8px 20px;
        border-radius: 20px;
        transition: all 0.3s ease;
      }
      
      .link-button:hover {
        background: rgba(255, 51, 102, 0.8);
        box-shadow: 0 0 15px rgba(255, 51, 102, 0.4);
      }
      
      /* Bottom action container (hidden by default) */
      #action-container {
        text-align: center;
        margin-bottom: 40px;
        display: none; /* Revealed when marker is found */
        pointer-events: auto;
      }
      
      /* Portfolio Button */
      #portfolio-button {
        background: linear-gradient(135deg, #ff3366, #ff6b33);
        color: white;
        padding: 16px 40px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        display: inline-block;
        box-shadow: 0 8px 25px rgba(255, 51, 102, 0.5);
        border: 2px solid rgba(255, 255, 255, 0.2);
        animation: pulse 2s infinite;
        transition: transform 0.2s;
      }
      
      #portfolio-button:active {
        transform: scale(0.95);
      }
      
      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 8px 25px rgba(255, 51, 102, 0.5); }
        50% { transform: scale(1.05); box-shadow: 0 8px 35px rgba(255, 51, 102, 0.7); }
        100% { transform: scale(1); box-shadow: 0 8px 25px rgba(255, 51, 102, 0.5); }
      }
      
      /* Loading screen */
      .arjs-loader {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .arjs-loader div {
        text-align: center;
        font-size: 1.25em;
        color: white;
      }
    </style>
    
    <script>
      // Component to detect marker and toggle the portfolio button
      AFRAME.registerComponent('markerhandler', {
        init: function () {
          const actionContainer = document.getElementById('action-container');
          const instructions = document.getElementById('instructions');
          
          this.el.sceneEl.addEventListener('markerFound', () => {
            actionContainer.style.display = 'block';
            instructions.style.opacity = '0.3'; // Dim instructions to focus on AR
          });
          
          this.el.sceneEl.addEventListener('markerLost', () => {
            actionContainer.style.display = 'none';
            instructions.style.opacity = '1';
          });
        }
      });
    </script>
  </head>
  
  <body>
    <!-- 2D UI Overlay -->
    <div id="ui-container">
      <div id="instructions">
        <h3>AR Experience</h3>
        <p>1. Allow camera permissions</p>
        <p>2. Point camera at the Hiro marker</p>
        <a class="link-button" href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" target="_blank">Download Hiro Marker</a>
      </div>
      
      <div id="action-container">
        <a id="portfolio-button" href="https://lukman-portfolio-xi.vercel.app/" target="_blank">Visit Portfolio</a>
      </div>
    </div>

    <!-- 3D AR Scene -->
    <a-scene 
      embedded 
      arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;" 
      renderer="antialias: true; alpha: true" 
      vr-mode-ui="enabled: false">
      
      <a-marker preset="hiro" markerhandler>
        
        <!-- Rotating Container for Card -->
        <a-entity position="0 0.5 0" rotation="-90 0 0" animation="property: position; to: 0 0.6 0; dir: alternate; dur: 2000; loop: true">
          
          <!-- Main Card Background -->
          <a-plane width="3" height="1.8" color="#0f172a" material="opacity: 0.95; transparent: true; roughness: 0.3"></a-plane>
          
          <!-- Card Border/Accent -->
          <a-plane width="2.9" height="1.7" position="0 0 0.01" color="#1e293b" material="opacity: 0.9; transparent: true;"></a-plane>
          
          <!-- Top Accent Line -->
          <a-plane width="2.9" height="0.05" position="0 0.825 0.02" color="#ff3366"></a-plane>
          
          <!-- Profile/Logo Placeholder (Left side) -->
          <a-circle radius="0.35" position="-1 0.2 0.02" color="#334155"></a-circle>
          <a-text value="LS" position="-1.2 0.2 0.03" scale="1.8 1.8 1.8" color="#ff3366" font="exo2bold"></a-text>
          
          <!-- Name -->
          <a-text value="Lukman Shaikh" position="-0.4 0.4 0.02" scale="1.4 1.4 1.4" color="#f8fafc" font="exo2bold" align="left"></a-text>
          
          <!-- Title -->
          <a-text value="Full Stack Developer /" position="-0.4 0.1 0.02" scale="0.6 0.6 0.6" color="#94a3b8" align="left"></a-text>
          <a-text value="AI Developer" position="-0.4 -0.05 0.02" scale="0.6 0.6 0.6" color="#94a3b8" align="left"></a-text>
          
          <!-- Divider line -->
          <a-plane width="2.5" height="0.01" position="0 -0.3 0.02" color="#ff3366" material="opacity: 0.4"></a-plane>
          
          <!-- Bottom Text / Call to Action -->
          <a-text value="Look at your screen to visit portfolio" position="0 -0.55 0.02" scale="0.45 0.45 0.45" color="#cbd5e1" align="center"></a-text>
          
          <!-- Decorative UI Elements -->
          <a-ring color="#ff3366" radius-inner="0.4" radius-outer="0.42" position="-1 0.2 0.01" material="opacity: 0.5"></a-ring>
        </a-entity>
        
      </a-marker>

      <!-- Camera -->
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
  `;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

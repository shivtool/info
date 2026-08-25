// Function to inject floating home button once DOM is fully loaded
function addFloatingHomeButton() {
  // Prevent duplicate insertion if script runs twice
  if (document.getElementById('shiv-floating-home-btn')) return;

  // Create CSS Styles
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    .floating-home-btn {
      position: fixed;
      bottom: 40px;
      right: 50px;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 65px;
      background: linear-gradient(135deg, #b3032c02, #fa6e5500);
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(20, 1, 5, 0.62), 
                  0 0 40px rgba(77, 26, 17, 0.04);
      transition: all 0.3s ease-in-out;
      animation: floatGlow 2.5s infinite ease-in-out;
      text-decoration: none;
      border: .5px solid rgba(255, 255, 255, 0.1);
    }

    .floating-home-btn span {
      font-size: 30px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      transition: transform 0.3s ease;
    }

    .floating-home-btn:hover {
      transform: scale(1.15) rotate(8deg);
      box-shadow: 0 0 30px rgba(255, 65, 109, 0.07), 
                  0 0 60px rgba(255, 75, 43, 0.09);
      background: linear-gradient(135deg, #ff4b2b09, #ff416d1c);
    }

    .floating-home-btn:hover span {
      transform: scale(1.1);
    }

    @keyframes floatGlow {
      0% {
        transform: translateY(0px);
        box-shadow: 0 0 15px rgba(117, 102, 247, 0.11), 0 0 30px rgba(255, 75, 43, 0.03);
      }
      50% {
        transform: translateY(-10px);
        box-shadow: 0 0 25px rgba(255, 65, 109, 0.93), 0 0 50px rgba(180, 59, 38, 0.98);
      }
      100% {
        transform: translateY(0px);
        box-shadow: 0 0 15px rgb(255, 65, 109), 0 0 30px rgba(99, 32, 21, 0.97);
      }
    }
  `;
  document.head.appendChild(styleTag);

  // Create and inject the HTML Button
  const homeButton = document.createElement('a');
  homeButton.id = 'shiv-floating-home-btn';
  homeButton.href = "https://shivtool.github.io/info/AI.html";
  homeButton.className = "floating-home-btn";
  homeButton.title = "AI Home Page";
  homeButton.innerHTML = "<span>🏡</span>";

  document.body.appendChild(homeButton);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addFloatingHomeButton);
} else {
  addFloatingHomeButton();
}

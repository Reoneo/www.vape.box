body, html {
    margin: 0;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}

#video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

#container {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}

.footer-images {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    justify-content: center;
}

.footer-image {
    width: 30px;
    height: 30px;
    margin: 0 10px;
}

#footer-text {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    font-size: 12px;
    color: #000;
    text-align: center;
    white-space: nowrap;
}

#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
}

#menu-button {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 4;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.5s ease;
}

#menu-button div {
    width: 20px;
    height: 2px;
    background-color: white;
    position: relative;
    transition: all 0.3s;
}

#menu-button div::before,
#menu-button div::after {
    content: '';
    width: 20px;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: all 0.3s;
}

#menu-button div::before {
    top: -6px;
}

#menu-button div::after {
    bottom: -6px;
}

#menu-button.active div {
    background-color: transparent;
}

#menu-button.active div::before {
    top: 0;
    transform: rotate(45deg);
}

#menu-button.active div::after {
    bottom: 0;
    transform: rotate(-45deg);
}

#menu-overlay {
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

#menu-overlay.active {
    opacity: 1;
    visibility: visible;
}
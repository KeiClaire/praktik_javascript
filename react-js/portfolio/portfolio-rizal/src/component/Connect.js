import foto from './foto.jpg'

function Connect() {
    return(
        <div id="connect" class="section4">
            <div class="container text-center">
                <div class="foto">
                    <img src={foto}/>   
                </div>
                <h3>Rizal Dwi Ristiadi</h3>
                <div>
                    <a target="_blank" href="https://www.instagram.com/zalldwiii/?igsh=djJubDBobW5kMm42" class="social-media">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/@rzlgaming6306" class="social-media">
                        <i class="bi bi-youtube"></i>
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/@zalldwiii?_t=8jSlTT4RxVC&_r=1" class="social-media">
                    <i class="bi bi-tiktok"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Connect
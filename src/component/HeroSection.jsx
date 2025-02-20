
import ButtomNav from './ButtomNav';

function HeroSection() {
    return (
        <div className="w-full h-screen relative overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                src="./video.mp4"
            />

            {/* Black Overlay */}
            <div className="absolute  top-0 left-0 w-full h-full bg-black/55 opacity-50"></div>


            <ButtomNav />

        </div>
    );
}

export default HeroSection;

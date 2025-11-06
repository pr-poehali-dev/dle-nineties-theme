import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('3:45');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const tracks = [
    { title: 'Retro Wave', artist: 'Synthwave FM', duration: 225 },
    { title: 'Neon Dreams', artist: 'Vaporwave Radio', duration: 198 },
    { title: 'Digital Love', artist: 'Cyber Beats', duration: 267 },
    { title: '90s Nostalgia', artist: 'Time Machine', duration: 180 }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const trackDuration = tracks[currentTrack].duration;
          if (prev >= trackDuration) {
            handleNext();
            return 0;
          }
          const newProgress = prev + 1;
          setCurrentTime(formatTime(newProgress));
          return newProgress;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    setDuration(formatTime(tracks[currentTrack].duration));
  }, [currentTrack]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setProgress(0);
    setCurrentTime('0:00');
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
    setCurrentTime('0:00');
  };

  const handleProgressChange = (value: number[]) => {
    const newProgress = value[0];
    setProgress(newProgress);
    setCurrentTime(formatTime(newProgress));
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="retro-button bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center animate-pulse-glow"
        >
          <Icon name={isPlaying ? 'Music' : 'Music'} size={24} className={isPlaying ? 'animate-pulse' : ''} />
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 glass-effect border-2 border-primary/50 z-50 overflow-hidden">
      <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded animate-pulse-glow flex items-center justify-center">
              <Icon name="Music" size={16} className="text-background" />
            </div>
            <span className="font-retro text-sm text-primary retro-text-shadow">WINAMP 2.91</span>
          </div>
          <div className="flex gap-1">
            <Button
              onClick={() => setIsMinimized(true)}
              className="w-6 h-6 p-0 bg-accent/50 hover:bg-accent text-accent-foreground flex items-center justify-center"
            >
              <Icon name="Minus" size={14} />
            </Button>
            <Button
              onClick={() => setIsMinimized(true)}
              className="w-6 h-6 p-0 bg-destructive/50 hover:bg-destructive text-destructive-foreground flex items-center justify-center"
            >
              <Icon name="X" size={14} />
            </Button>
          </div>
        </div>

        <div className="glass-effect border border-primary/30 p-3 mb-3 rounded">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded flex items-center justify-center animate-pulse-glow">
              <Icon name="Disc3" size={24} className={`text-background ${isPlaying ? 'animate-spin' : ''}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-foreground font-bold text-sm truncate">{tracks[currentTrack].title}</p>
              <p className="text-muted-foreground text-xs truncate">{tracks[currentTrack].artist}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono w-10">{currentTime}</span>
              <Slider
                value={[progress]}
                max={tracks[currentTrack].duration}
                step={1}
                onValueChange={handleProgressChange}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground font-mono w-10 text-right">{duration}</span>
            </div>

            <div className="grid grid-cols-12 gap-1 h-8">
              {Array.from({ length: 12 }).map((_, i) => {
                const barHeight = isPlaying
                  ? Math.sin((progress + i) * 0.5) * 50 + 50
                  : 20;
                return (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-primary via-secondary to-accent rounded-sm transition-all duration-150"
                    style={{
                      height: `${barHeight}%`,
                      opacity: isPlaying ? 0.8 : 0.3
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <Button
            onClick={handlePrevious}
            className="retro-button bg-secondary text-secondary-foreground px-3 py-2"
          >
            <Icon name="SkipBack" size={18} />
          </Button>
          <Button
            onClick={handlePlayPause}
            className="retro-button bg-primary text-primary-foreground px-6 py-3 animate-pulse-glow"
          >
            <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} />
          </Button>
          <Button
            onClick={handleNext}
            className="retro-button bg-secondary text-secondary-foreground px-3 py-2"
          >
            <Icon name="SkipForward" size={18} />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="Volume2" size={16} className="text-accent" />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground font-mono w-8 text-right">{volume}</span>
        </div>

        <div className="mt-3 pt-3 border-t border-primary/30">
          <div className="text-xs text-muted-foreground text-center font-mono">
            <span className="blink">♪</span> Playlist: {tracks.length} tracks{' '}
            <span className="blink">♪</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MusicPlayer;

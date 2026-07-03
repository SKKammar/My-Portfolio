import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Santosh K Kammar - Software Engineer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#09090B',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Starfield effect */}
                <div style={{ position: 'absolute', top: '10%', left: '20%', width: 2, height: 2, backgroundColor: 'white', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', top: '30%', left: '80%', width: 3, height: 3, backgroundColor: 'white', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', top: '70%', left: '15%', width: 2, height: 2, backgroundColor: 'white', borderRadius: '50%' }} />
                
                {/* Glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '800px',
                        height: '800px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(9,9,11,0) 70%)',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                        zIndex: 10,
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: 40, height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                        <h2 style={{ fontSize: '24px', textTransform: 'uppercase', letterSpacing: '4px', color: 'rgba(255,255,255,0.5)' }}>
                            Software Engineer
                        </h2>
                        <div style={{ width: 40, height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    </div>

                    <h1 style={{ fontSize: '84px', fontWeight: 'bold', margin: 0, textAlign: 'center' }}>
                        Santosh K Kammar
                    </h1>

                    <p style={{ fontSize: '32px', color: 'rgba(255,255,255,0.5)', maxWidth: '800px', textAlign: 'center', marginTop: '20px' }}>
                        Building production-grade backend systems, full-stack applications, and AI solutions.
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}

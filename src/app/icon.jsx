
import { ImageResponse } from 'next/og';
import { T20LogoIcon } from '@/components/t20-logo-icon';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#09090b',
          borderRadius: '50%',
        }}
      >
        <T20LogoIcon
          style={{
            width: '80%',
            height: '80%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

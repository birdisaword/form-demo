import jwt from 'jsonwebtoken'

export function generateAccessToken(userId: string): string {
  const accessToken = jwt.sign({ userId }, 'your-access-token-secret', { expiresIn: '15m' });
  return accessToken;
}

export function generateRefreshToken(userId: string): string {
  const refreshToken = jwt.sign({ userId }, 'your-refresh-token-secret', { expiresIn: '7d' });
  return refreshToken;
}

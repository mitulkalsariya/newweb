import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
)

export async function verifyAuth(request: NextRequest): Promise<{ 
  authenticated: boolean
  user?: any
  error?: string 
}> {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { 
        authenticated: false, 
        error: 'No token provided' 
      }
    }

    const token = authHeader.substring(7)

    try {
      const verified = await jwtVerify(token, JWT_SECRET)
      
      return {
        authenticated: true,
        user: verified.payload
      }
    } catch (error) {
      return { 
        authenticated: false, 
        error: 'Invalid or expired token' 
      }
    }
  } catch (error) {
    return { 
      authenticated: false, 
      error: 'Internal server error' 
    }
  }
}

export function unauthorizedResponse(message: string = 'Unauthorized') {
  return NextResponse.json(
    { success: false, message },
    { status: 401 }
  )
}


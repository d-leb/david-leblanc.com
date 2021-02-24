interface EnvironmentType {
  mode: 'development' | 'production'
}

export const Environment: EnvironmentType = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
}

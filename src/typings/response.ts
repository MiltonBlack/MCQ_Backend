export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse

export interface ApiSuccessResponse<T> {
  success: true
  message: string
  data: object
}

export interface ApiErrorResponse {
  success: false
  message: string
  errors?: Record<string, string[]>
}

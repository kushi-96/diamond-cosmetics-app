export interface SendResponseInterface {
  [x: string]: any
  isError: boolean
}

/**
 * Error code legend
 * 0 = No error
 * 1 = Invalid username or password
 * 2 = User is not activated
 * 3 = User is locked
 * 4 = User is not found
 * 5 = Either of the username or password is empty
 */

export const sendResponse = ({
  isError,
  message,
  heading,
  errorCode,
  data,
}: SendResponseInterface) => {
  return {
    isError,
    errorCode,
    heading,
    message,
    data,
  }
}

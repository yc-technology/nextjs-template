'use server'

// use server 开头代表代码可以被服务器端和客户端调用

import { cookies } from 'next/headers'

export async function exampleAction() {
  // Get cookie
  const value = cookies().get('name')?.value

  // Set cookie
  cookies().set('name', 'Delba')

  // Delete cookie
  //   cookies().delete('name')

  console.log(value)

  return { value: value || 'test' }
}

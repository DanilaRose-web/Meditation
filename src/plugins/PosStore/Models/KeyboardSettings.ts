/**
 * Настройки клавиатуры
 */
export default class KeyboardSettings{
    title: string    
    type: string
    password: boolean = false
    mask?:string = undefined
    regex?:string = undefined
}
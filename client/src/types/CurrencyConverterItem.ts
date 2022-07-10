type ConversionType = {
    type: string,
    value: number
}

export type CurrentConverterValue = {
    created_at: string
    current: ConversionType
    to_now: ConversionType

}
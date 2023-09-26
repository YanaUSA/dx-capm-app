import {WEI_NUMBER} from '@constants/constants'

export function formatFromWeiToEther(value: BigInt | number | {}): number {
    const dataToNumber = Number(value);
    return dataToNumber / WEI_NUMBER;
}

export function formatToWei(value: any) {
    return value * WEI_NUMBER;
}
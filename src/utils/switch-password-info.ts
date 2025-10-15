export const switchPasswordInfo = (passwordInfo: string) => {
    switch (passwordInfo) {
        case 'strong':
            return { percent: 100, strokeColor: '#52c41a' };
        case 'high':
            return { percent: 75, strokeColor: '#df8c10ff' };
        case 'medium':
            return { percent: 50, strokeColor: '#c2aa4cff' };
        case 'low':
            return { percent: 25, strokeColor: '#e21313ff' };
        default:
            return { percent: 0, strokeColor: '#ff6600' };
    }
}
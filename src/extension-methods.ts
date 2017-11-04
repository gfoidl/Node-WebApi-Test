export { }
//-----------------------------------------------------------------------------
declare global {
    interface String {
        toFirstUpper(): string;
    }
}
//-----------------------------------------------------------------------------
String.prototype.toFirstUpper = function () {
    let first = this.charAt(0).toUpperCase();
    return `${first}${this.substring(1)}`;
}
//-----------------------------------------------------------------------------
export function CallCCtor(target: any) {
    target.StaticConstruct();
}
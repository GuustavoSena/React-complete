export default function Button({children, ...props}){
    return <button className="px-4 px-y font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500" {...props}>{children}</button>
}
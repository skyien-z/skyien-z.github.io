export function NewTabLink({href, linkedText}) {
    return (
        <a target='_blank' rel="noreferrer" href={href}>{linkedText}</a>
    )
}
import source from 'bootstrap-icons/bootstrap-icons.svg'

export default ({ name, className, onClick }) => {
  return (
    <svg className={['bi', className].join(' ')} width='1rem' height='1rem' fill='currentColor' onClick={onClick}>
      <use xlinkHref={`${source}#${name}`} />
    </svg>
  )
}

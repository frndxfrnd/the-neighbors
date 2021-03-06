import source from 'bootstrap-icons/bootstrap-icons.svg'

export default ({ name, className }) => {
  return (
    <svg className={['bi', className].join(' ')} width='1rem' height='1rem' fill='currentColor'>
      <use xlinkHref={`${source}#${name}`} />
    </svg>
  )
}

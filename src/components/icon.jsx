import source from 'bootstrap-icons/bootstrap-icons.svg'

export default ({ name }) => {
  return (
    <svg className='bi' width='1rem' height='1rem' fill='currentColor'>
      <use xlinkHref={`${source}#${name}`} />
    </svg>
  )
}

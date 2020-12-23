function withHeading(WrappedComponent) {
  return (props) => (
    <div>
      <h1>Data JSON</h1>
      <WrappedComponent {...props} />
    </div>
  )
}

export {withHeading}
const ForeverPage = () => <p>This page was rendered for a while!</p>

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

export default ForeverPage

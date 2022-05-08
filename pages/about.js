const AboutPage = () => <p style={{ marginLeft: '10rem' }}>This is about Next.js!</p>

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

export default AboutPage

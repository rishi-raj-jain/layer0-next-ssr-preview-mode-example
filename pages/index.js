export async function getServerSideProps(context) {
  console.log(context.preview);
  console.log(context.previewData);
  const date = context.previewData
    ? context.previewData.date
    : context.preview
    ? "cached"
    : "not-a-preview";
  const responseDate = new Date().toString();
  return {
    props: {
      date,
      responseDate,
    },
  };
}

const Home = ({ date, responseDate }) => {
  return `${date}, ${responseDate}`;
};

export default Home;

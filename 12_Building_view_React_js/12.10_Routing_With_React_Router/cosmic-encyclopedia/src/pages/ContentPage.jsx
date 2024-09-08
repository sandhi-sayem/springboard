const ContentPage = ({ planet }) => {
  return (
    <div>
      <h1>{planet.title}</h1>
      <p>{planet.content}</p>
    </div>
  );
};

export default ContentPage;

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      margin: '0 auto',
      padding: theme.spacing(2),
    },
    author: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
    },
  }));
  
  const testimonialData = [
    {
      id: 1,
      author: 'John Doe',
      job: 'Web Developer',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at justo vitae justo tristique fermentum. Integer non commodo dolor.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      job: 'Graphic Designer',
      comment:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec felis eu dolor convallis euismod.',
    },
    // Add more testimonial objects as needed
  ];
  
  export const TestimonialSlider = () => {
    const classes = useStyles();
  
    return (
      <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} showArrows={false}>
        {testimonialData.map((testimonial) => (
          <Paper key={testimonial.id} className={classes.root}>
            <Typography variant="body2" className={classes.author}>
              {testimonial.author}
            </Typography>
            <Typography variant="body2">{testimonial.job}</Typography>
            <Typography variant="body1">{testimonial.comment}</Typography>
          </Paper>
        ))}
      </Carousel>
    );
  };
  
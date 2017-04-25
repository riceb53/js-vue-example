document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      review1: 'Hello Vue!',
      review2: 'yes',
      review3: 'okay',
      reviews: [
        {
          text: "Vue.js is the best thing since sliced bread!",
          rating: 5,
          reviewer: "Burton Wax"
        },
        {
          text: "I love Vue.js, especially when I'm programming!",
          rating: 4,
          reviewer: "Emily Post"
        },
        {
          text: "Vue.js is waaaaay better than Chinese Checkers.",
          rating: 2,
          reviewer: "Angela Pearson"
        }
      ],
      newText: '',
      newRating: '',
      newReviewer: ''
    },
    methods: {
      addReview: function() {
        // if (this.newText.length > 0) {
          console.log('I am adding the review...');
          this.reviews.push(
            {
              text: this.newText,
              rating: this.newRating,
              reviewer: this.newReviewer
            }
          );
          this.newText = "";
          this.newReviewer = "";
          this.newRating = "";
        // } else {
          // console.log('you messed up');
        // }
      },
      removeReview: function(inputReview) {
        // console.log('I am removing the review');
        // console.log(inputReview);
        var index = this.reviews.indexOf(inputReview);
        this.reviews.splice(index, 1);
      },
      isNice: function(inputReview) {
        console.log('in is nice');
        // if the word 'bad' is in the review, don't show it
        console.log(inputReview.indexOf('bad'));
        return inputReview.indexOf('bad') === -1;
      }
    }
  });
});

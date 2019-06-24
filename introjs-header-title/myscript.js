function show(event){
          //initialize instance
          var introj = introJs();

          //set Steps config in the form of Array
          introj.setOptions({
            steps: [
              {
                element: '#step1',
                intro: "This is a tooltip!",
                title: 'Step 1'
              },
              {
                element: '#step2',
                intro: "Ok, wasn't that fun?",
                position: 'right',
                title: 'Step 2'

              },
              {
                element: '#step3',
                intro: 'More features, more fun.',
                position: 'left',
                title: 'Step 3'
              },
              {
                element: '#step4',
                intro: 'Another step.',
                position: 'auto',
                title: 'Step 4'
              },
              {
                element: '#step5',
                intro: 'Get it, use it.',
                position: 'left',
                title: 'Step 5'
              },
            ]
          });

          // Run the intro - appear dialog with details.
          introj.start();
          return true;
      }
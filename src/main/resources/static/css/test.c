#include <stdio.h>

int main() {

    double grades[25] = {65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
        49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01};

    double bounds[12] = {0.00, 50.00, 55.00, 60.00, 65.00, 70.00, 75.00, 80.00, 85.00, 90.00, 95.00, 100.00};
    unsigned int OGlength = 24;
    int gradeCount[12] = {0,0,0,0,0,0,0,0,0,0,0,0};

    for(unsigned int i = 0; i <= OGlength; i++){

        if(grades[i] < bounds[1]){
            //Is it an F?
            printf("%lf is an F\n", grades[i]);
            gradeCount[0]++; //less than 50
        }
        if(grades[i] < bounds[2] && grades[i] >= bounds[1]){
            //Is it a D? 
            printf("%lf is an D\n", grades[i]);            
            gradeCount[1]++; //less than 55 and greater than 50
        }
        if(grades[i] < bounds[3] && grades[i] >= bounds[2]){
            // Is it a C-?
            printf("%lf is an C-\n", grades[i]);
            gradeCount[2]++; //less than 60 and greater than 55
        }
        if(grades[i] < bounds[4] && grades[i] >= bounds[3]){
            // Is it a C? 
            printf("%lf is an C\n", grades[i]);            
            gradeCount[3]++;
        }
        if(grades[i] < bounds[5] && grades[i] >= bounds[4]){
            // Is it a C+?
            printf("%lf is an C+\n", grades[i]);
            gradeCount[4]++;
        }
        if(grades[i] < bounds[6] && grades[i] >= bounds[5]){
            // Is it a B-?
            printf("%lf is an B-\n", grades[i]);
            gradeCount[5]++;
        }
        if(grades[i] < bounds[7] && grades[i] >= bounds[6]){
            // Is it a B? 
            printf("%lf is an B\n", grades[i]); 
            gradeCount[6]++;
        }
        if(grades[i] < bounds[8] && grades[i] >= bounds[7]){
            // Is it a B+?
            printf("%lf is an B+\n", grades[i]);
            gradeCount[7]++;
        }
        if(grades[i] < bounds[9] && grades[i] >= bounds[8]){
            // Is it a A-?
            printf("%lf is an A-\n", grades[i]);
            gradeCount[8]++;
        }
        if(grades[i] < bounds[10] && grades[i] >= bounds[9]){
            // Is it an A? 
            printf("%lf is an A\n", grades[i]);
            gradeCount[9]++;
        }
        if(grades[i] >= bounds[10]){
            // Is it an A+?
            printf("%lf is an A+\n", grades[i]);
            gradeCount[10]++;
        }
      }

    for(unsigned int i = 0; i < 11; i++){
        printf("%d ", gradeCount[i]);
    }

  return 0;
}
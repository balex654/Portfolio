#include <stdio.h>
#define MAXPOINTS 10000
// compute the average of the first num_items of buffer
double avg(double buffer[], int num_items);

//update the max and min of the first num_items of array
void maxmin(double array[], int num_items, double* max, double* min);

//shift length-1 elements of the buffer to the left and put the 
//new_item on the right.
void updatebuffer(double buffer[], int length, double new_item);

double avg(double buffer[], int num_items){
	int i;
	double sum = 0;
	double average;
	for (i = 0; i < num_items; ++i){
		sum = buffer[i] + sum;
	}
	average = sum / num_items;
	return average;
}

void maxmin(double array[], int num_items, double* max, double* min){
	int i;
	for (i = 0; i < num_items; ++i){
		if (array[i] > *max){
			*max = array[i];
		}
		if (i == 0 ){
			*max = array[i];
		}
		if (array[i] < *min){
			
			*min = array[i];
		}
		if (i == 0){
			*min = array[i];
		}
	}
	return;
}

void updatebuffer(double buffer[], int length, double new_item){
	int i;
	for (i = 0; i <= length; ++i){
		if (i == length){
			buffer[i - 1] = new_item;
		}
		else{
			buffer[i] = buffer[i + 1]; 
		}
	}
	return;
}

int main(int argc, char* argv[]) {
	int bB, bT, bL, bR, bC;
	double bP;
	double ax, ay, az;
	double x[MAXPOINTS], y[MAXPOINTS], z[MAXPOINTS];
	int lengthofavg = 0;
	int i;
	double avgX, avgY, avgZ;
	double maxX = 0;
	double minX = 0;
	double maxY = 0;
	double minY = 0;
	double maxZ = 0;
	double minZ = 0;
	double newX, newY, newZ;
	if (argc>1) {
		sscanf(argv[1], "%d", &lengthofavg );
		printf("You entered a buffer length of %d\n", lengthofavg);
	}
	else {
		printf("Enter a length on the command line\n");
		return -1;
	}
	if (lengthofavg <1 || lengthofavg >MAXPOINTS) {
		printf("Invalid length\n");
		return -1;
	}
	for(i = 0; i < lengthofavg; ++i){
		scanf("%lf, %lf, %lf, %d, %d, %d, %d, %d, %lf", &x[i], &y[i], &z[i], &bB, &bT, &bL, &bR, &bC, &bP);
	}
	while(1){
		scanf("%lf, %lf, %lf, %d, %d, %d, %d, %d, %lf", &ax, &ay, &az, &bB, &bT, &bL, &bR, &bC, &bP);
		printf("%lf, %lf, %lf, ", ax, ay, az);
		maxmin(x, lengthofavg, &maxX, &minX);
		maxmin(y, lengthofavg, &maxY, &minY);
		maxmin(z, lengthofavg, &maxZ, &minZ);
		printf("%lf, %lf, %lf, %lf, %lf, %lf, ", maxX, minX, maxY, minY, maxZ, minZ);
		avgX = avg(x, lengthofavg);
		avgY = avg(y, lengthofavg);
		avgZ = avg(z, lengthofavg);
		printf("%lf, %lf, %lf\n", avgX, avgY, avgZ);
		scanf("%lf, %lf, %lf, %d, %d, %d, %d, %d, %lf", &newX, &newY, &newZ, &bB, &bT, &bL, &bR, &bC, &bP);
		updatebuffer(x, lengthofavg, newX);
		updatebuffer(y, lengthofavg, newY);
		updatebuffer(z, lengthofavg, newZ);
		if (bL == 1){
			return 0;
		}
	}
}


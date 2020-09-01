#include <stdio.h>
#include <math.h>
#define TRUE 1

double seconds(double ms);
int mag(double x, double y, double z);
int closeto(double tolerance, double point, double value);
double othermag(double x, double y, double z);

int main (){
	double t;
	double ax;
	double ay;
	double az;
	double fallstart;
	double fallstop;
	double falltime;
	double distance;
	int num = 0;
	int num2 = 0;
	double newV = 0;
	double oldT;
	double newT;
	double newD = 0;
	double difference;
	scanf("%lf,%lf,%lf,%lf", &t, &ax, &ay, &az);
	printf("Ok im recieving data\n");
	printf("Im waiting");
	while (mag(ax, ay, az) == 0){
		if ((num % 100) == 0){
			printf(".");
		}
		scanf("%lf,%lf,%lf,%lf", &t, &ax, &ay, &az);
		++num;
		fflush(stdout);
	}
	printf("\n");
	fallstart = t;
	printf("help me! Im falling");
	while (mag(ax, ay, az) == 1){
		oldT = seconds(t);
		if ((num2 % 100) == 0){
			printf("!");
		}
		scanf("%lf,%lf,%lf,%lf", &t, &ax, &ay, &az);
		++num2;
		newT = seconds(t);
		newV = newV + (9.8 * ((1 - othermag(ax, ay, az)) * (newT - oldT)));
		newD = newD + (newV * (newT - oldT));
		fflush(stdout);
	}
	printf("\n");
	fallstop = t;
	falltime = seconds(fallstop - fallstart);
	distance = .5 * 9.8 * falltime * falltime;
	difference = 100 - ((newD / distance) * 100);
	printf("Ouch, I fell %lf meter in %lf seconds\n", distance, falltime);
	printf("Compensating for air resistance, the fall was %lf meters.\n", newD);
	printf("This is %lf percent less than computed before\n", difference);
}

double seconds(double ms){
	double seconds;	
	seconds = ms / 1000;
	return seconds;
}

int closeto(double tolerance, double point, double value){
	if(tolerance > fabs(point - value)){
		return 1;
	}
	else {
		return 0;
	}
}

int mag(double x, double y, double z){
	double mag;
	
	mag = sqrt((x * x) + (y * y) + (z * z));
	if (closeto(.13, 1, mag) == 1){
		return 0;
	}
	else {
		return 1;
	}
}

double othermag(double x, double y, double z){
	double mag;

	mag = sqrt((x * x) + (y * y) + (z * z));
	
	return mag;
}
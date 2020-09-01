#include <stdio.h>
#include <math.h>
#define PI 3.141592653589

int scaleRadsForScreen(double rad);
double pitch(double y_mag);
double roll(double x_mag);
int read_acc(double* a_x, double* a_y, double* a_z, int* Button_UP, int* Button_DOWN, int* Button_LEFT, int* Button_RIGHT);
void print_chars(int num, char use);
void graph_line(int number);

int read_acc(double* a_x, double* a_y, double* a_z, int* Button_UP, int* Button_DOWN, int* Button_LEFT, int* Button_RIGHT){
	int Button_5;
	double slide;
	scanf("%lf, %lf, %lf, %d, %d, %d, %d, %d, %lf", &*a_x, &*a_y, &*a_z, &*Button_UP, &*Button_DOWN, &*Button_LEFT, &*Button_RIGHT, &Button_5, &slide);
	return *Button_LEFT;
}

double roll(double x_mag){
	double radians;
	if (x_mag >= 1){
		x_mag = 1;
	}
	if (x_mag <= -1){
		x_mag = -1;
	}
	radians = asin(x_mag);
	return radians;
}

double pitch(double y_mag){
	double radians;
	if (y_mag >= 1){
		y_mag = 1;
	}
	if (y_mag <= -1){
		y_mag = -1;
	}
	radians = asin(y_mag);
	return radians;
}

int scaleRadsForScreen(double rad){
	int screenVal;
	screenVal = rad * (78 / PI);
	return screenVal;
}

void print_chars(int num, char use){
	int i;
	for (i = 0; i < num; ++i){
		printf("%c", use);
	}
	return;
}

void graph_line(int number){
	int spaces;
	if (number >= 0){
		print_chars(40, ' ');
		print_chars(number, 'R');
		print_chars(1, '\n');
	}
	if (number < 0){
		spaces = 40 + number;
		print_chars(spaces, ' ');
		print_chars(fabs(number), 'L');
		print_chars(1, '\n');
	}
	return;
}

int main(){
	
	double x, y, z;			
	int b_Up, b_Down, b_Left, b_Right;
	double roll_rad, pitch_rad;
	int scaled_value;
	int value = 0;
	int value2 = 0;
	
	while(1){
		read_acc(&x, &y, &z, &b_Up, &b_Down, &b_Left, &b_Right);
		roll_rad = roll(x);
		pitch_rad = pitch(y);
		if (b_Left == 1){
			value = 1;
			value2 = 0;
		}
		if (value == 1){
			scaled_value = scaleRadsForScreen(roll_rad);
			graph_line(scaled_value);
		}
		read_acc(&x, &y, &z, &b_Up, &b_Down, &b_Left, &b_Right);
		if (b_Right == 1){
			value2 = 1;
			value = 0;
		}
		if (value2 == 1){
			scaled_value = scaleRadsForScreen(pitch_rad);
			graph_line(scaled_value);
		}
		if (b_Down == 1){
			return 0;
		}
		fflush(stdout);
	}
}
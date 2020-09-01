// WII-MAZE Skeleton code written by Jason Erbskorn 2007
// Edited for ncurses 2008 Tom Daniels
//Updated for Esplora 2013 TeamRursch185


// Headers
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <ncurses/ncurses.h>
#include <unistd.h>
#include <time.h>

// Mathematical constants
#define PI 3.14159

// Screen geometry
// Use ROWS and COLUMNS for the screen height and width (set by system)
// MAXIMUMS
#define COLUMNS 100
#define ROWS 80

// Character definitions taken from the ASCII table
#define AVATAR 'A'
#define WALL '*'
#define EMPTY_SPACE ' '

// Number of samples taken to form an average for the accelerometer data
// Feel free to tweak this.  You may actually want to use the moving averages
// code you created last week 
#define NUM_SAMPLES 10  

// PRE: 0 < x < COLUMNS, 0 < y < ROWS, 0 < use < 255
// POST: Draws character use to the screen and position x,y
void draw_character(int x, int y, char use);

// 2D character array which the maze is mapped into
char MAZE[COLUMNS][ROWS];

// POST: Generates a random maze structure into MAZE[][]
//You will want to use the rand() function and maybe use the output %100.  
//You will have to use the argument to the command line to determine how 
//difficult the maze is (how many maze characters are on the screen).
void generate_maze(int difficulty);
void generate_maze(int difficulty){
	int i, a, num;
	for(i = 0; i < COLUMNS; ++i){
		for(a = 0; a < ROWS; ++a){
			num = rand() % 100;
			if (num < difficulty){
					MAZE[i][a] = WALL;
			}
			else{
				MAZE[i][a] = EMPTY_SPACE;
			}
		}
	}
}

// PRE: MAZE[][] has been initialized by generate_maze()
// POST: Draws the maze to the screen 
void draw_maze(void);
void draw_maze(void){
	char character;
	int i, a;
	for(i = 0; i < COLUMNS; ++i){
		for(a = 0; a < ROWS; ++a){
			character = MAZE[i][a];
			draw_character(i, a, character);
		}
	}
}

// PRE: -1.0 < y_mag < 1.0
// POST: Returns tilt magnitude scaled to -1.0 -> 1.0
// You may want to reuse the pitch function written in previous labs.  
float calc_roll(float x_mag);
float calc_roll(float x_mag){
	if (x_mag >= 1){
		x_mag = 1;
	}
	if (x_mag <= -1){
		x_mag = -1;
	}
	return x_mag;
}

// Main - Run with './explore.exe -t -a -b' piped into STDIN
void main(int argc, char* argv[])
{
	int t;
	int difficulty = 0;
	int i, a;
	int y = 0;
	int n = 0;
	char previous;
	float ax, ay, az;
	int x = 50;
	int previousT = 0;
	srand(time(NULL));
	sscanf(argv[1], "%d", &difficulty);
	// setup screen
	initscr();
	refresh();
	generate_maze(difficulty);
	draw_maze();
	draw_character(50, 0, AVATAR);
	while(y < 79){
		scanf("%d, %f, %f, %f", &t, &ax, &ay, &az);
		ax = calc_roll(ax);
		
		if ((t - previousT) > 100){
			previousT = t;
			if (y <= 0){
				draw_character(50, 0, EMPTY_SPACE);
			}
			else{
				previous = MAZE[50][y - 1];
				draw_character(50, (y - 1), previous);
			}
			draw_character(50, y, AVATAR);
			++y;
		}
		/*
		if ((t % 200) <= 2){
			if (MAZE[x][y + 1] == ' '){
				++y;
				draw_character(x, y, AVATAR);
				if (y <= 0){
					draw_character(50, 0, EMPTY_SPACE);
				}
				else{
					draw_character(x, (y - 1), EMPTY_SPACE);
				}
			}
			if ((MAZE[x + 1][y] == ' ') && (ax > .3)){
				++x;
				draw_character(x, y, AVATAR);
				draw_character((x - 1), y, ' ');
			}
			if ((MAZE[x - 1][y] == ' ') && (ax < -.3)){
				--x;
				draw_character(x, y, AVATAR);
				draw_character((x + 1), y, ' ');
			}
		}
		*/
	}
	printf("\n");
	printf("\nYOU WIN!\n");
	while(1);
}



// PRE: 0 < x < COLUMNS, 0 < y < ROWS, 0 < use < 255
// POST: Draws character use to the screen and position x,y
//THIS CODE FUNCTIONS FOR PLACING THE AVATAR AS PROVIDED.
//YOU DO NOT NEED TO CHANGE THIS FUNCTION.
void draw_character(int x, int y, char use)
{
	mvaddch(y,x,use);    
	refresh();
}


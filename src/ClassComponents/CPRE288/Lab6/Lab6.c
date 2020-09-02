/* Lab 6
	Aaron Ramsey
	Alex Schneider
	Ben Alexander
	2/28/2018
	
	Made for cybot #4
*/

#include <stdlib.h>
#include "Timer.h"
#include "lcd.h"
#include <math.h>


void PortB_Init (void){
    SYSCTL_RCGCADC_R |= 0x1; //Enable ADC Clock
    SYSCTL_RCGCGPIO_R |= 0x2; //Enable GPIO port B clock
    GPIO_PORTB_AFSEL_R |= 0x10; //Sets PB4 to alternate function
    GPIO_PORTB_DEN_R &= 0xEF; //Disables PB4's digital functions
    GPIO_PORTB_AMSEL_R |= 0x10; //Disable analog isolation on PB4
}

void ADC_init (void){
    ADC0_ACTSS_R &= 0xFFFFFFF0; //Disable Sample Sequencers for configuration
	ADC0_SSMUX0_R = 0x0000000A; //Select AIN10(PB4) as input for ADC0 sample sequencer 4
	ADC0_SSCTL0_R = 0x00000006; //Configures SS0 to take one sample and place into fifo
	ADC0_EMUX_R &= 0xFFFF0000; //Configure all of the SS to trigger on change in PSSI input
	ADC0_SAC_R |= 0x4; //Configure ADC hardware averager  to take 16 samples
	ADC0_ACTSS_R |= 0x1; //Enable SS0
}

float CentimeterConv (int ADCValue) {
    return  59789*pow(ADCValue, -1.086); //Uses tabulated formula to compute distance
}

 int main (void){

    int AdcResult = 0; //Variable to hold raw output from the ADC
    float Distance = 0; //Varialbe to hold distance in CM


    PortB_Init(); //Initialize port B
    ADC_init(); //Initialize ADC
    lcd_init(); //Initialize LCD


    while(1){

        if (!(ADC0_ACTSS_R & 0x00010000)) { //If the ADC is not busy start conversion
            ADC0_PSSI_R |= 0x1;
        }

        if (ADC0_RIS_R & 0x00000001){ //If conversion is complete Store result
            AdcResult = ADC0_SSFIFO0_R;
            ADC0_ISC_R |= 0x1;
        }

        Distance = CentimeterConv(AdcResult); //Calculate actual distance

        lcd_printf("%d, \n %0.1f cm", AdcResult, Distance); //Display Results
        timer_waitMillis(250);
    }
}

/**
 *CPRE 288 Lab 5
 *
 * @author Aaron Ramsey, Alex Schnieder, Ben Alexander
 * @date 08/07/2016
 */
 
 #include <stdlib.h>
 #include <stdbool.h>
 #include "button.h"
 #include "lcd.h"
 #include "Timer.h"
 #include "uart.h"
 #include "wifi.h"

 void initPortB (void){
     SYSCTL_RCGCGPIO_R = 0x02;
     SYSCTL_RCGCUART_R = 0x02;
     GPIO_PORTB_AFSEL_R = 0x03;
     GPIO_PORTB_PCTL_R = 0x00000011;
     GPIO_PORTB_DEN_R = 0x03;
 }
 


int main (void){
	 char DataIn[20];
	 char PSK[] = "Password33";
	 int i = 0;
	 initPortB();
	 //uart_init();
	 lcd_init();
	 button_init();
	 WiFi_start(PSK);
	 char lastButton;
	 char button;
	 while (1){

		 if (!(UART1_FR_R & 0x10)){ //If receive FIFO not empty receive data
			 DataIn[i] = uart_receive();
			 i++;
			 lcd_printf("%c \n Index:%d", DataIn[i-1], i);
		 }
	 if (i == 20){
	     lcd_printf("%s", DataIn);
	     i = 0;
	 }
	 if (DataIn[i-1] == '\r'){ //Checks to see if the latest key returned was the return key.
	     DataIn[i-1] = '\0';
	     lcd_printf("%s", DataIn); //Prints data out to LCD screen
	     uart_sendChar('\n'); //Sends string of characters back to putty after setting new line and carriage return.
	     uart_sendStr(DataIn);
	     i = 0; //Resets character count

	 }
	 button = button_getButton();
	 if(lastButton != button){
	     if(button == 0x06){
	              uart_sendStr("Yes");
	              timer_waitMillis(200);
	          }
	          else if(button == 0x05){
	              uart_sendStr("No");
	              timer_waitMillis(200);
	          }
	          else if(button == 0x04){
	              uart_sendStr("Blue, no green, Ahhhh!!!!");
	              timer_waitMillis(200);
	          }
	          else if(button == 0x03){
	                            uart_sendStr("Hello");
	                            timer_waitMillis(200);
	                        }
	          else if(button == 0x02){
	                            uart_sendStr("Firetruck");
	                            timer_waitMillis(200);
	                        }
	          else if(button == 0x01){
	                            uart_sendStr("aliens");
	                            timer_waitMillis(200);
	                        }
	 }
	 lastButton = button;
	 }
	 
 }
 
 

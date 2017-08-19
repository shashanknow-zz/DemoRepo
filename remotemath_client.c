#include <stdio.h>
#include <fcntl.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
int main() {
	int sockfd, i, j;
	char operator1[5], operator2[5], operand[5];
	struct sockaddr_in seradd, cliadd;
	sockfd = socket(AF_INET, SOCK_DGRAM, 0);
	seradd.sin_family = AF_INET;
	seradd.sin_addr.s_addr = inet_addr("127.0.0.1");
	seradd.sin_port = htons(9202);
	int result = bind(sockfd, (struct sockaddr *)&seradd, sizeof(seradd)); 
	int len = sizeof(seradd);
	printf("Enter first number : \n");
	gets(operator1);
	int x = sendto(sockfd, operator1, sizeof(operator1), 0, (struct sockaddr *)&seradd, len);
	printf("Enter second number : \n");
	gets(operator2);
	int y = sendto(sockfd, operator2, sizeof(operator2), 0, (struct sockaddr *)&seradd, len);
	printf("Enter the operand : \n");
	gets(operand);
	int z = sendto(sockfd, operand, sizeof(operand), 0, (struct sockaddr *)&seradd, len);
	int n = recvfrom(sockfd, operand, sizeof(operand), 0, (struct sockaddr *)&seradd, &len);
	printf("The operation returns : \n");
	puts(operand);
	return 0;
}

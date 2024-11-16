import csv

def main():
    # Initialize empty lists for each column
    
    data = []

    # Open the file using the csv module
    with open("MEC2024Data.csv", "r") as f:
        reader = csv.reader(f)

        for i, row in enumerate(reader):

            # Append data to respective lists

            time = row[6].split(":")
            row[6] = int(time[0])*60 + int(time[1])

            int(row[7])

            '''
            if (row[10] != ''):
                int(row[10])
            else:
                break
            if (row[11] != ''):
                int(row[10])
            else:
                break
            '''

            data.append(row)


            print(data[i])  # Print the current row

    # Example of what you could do next
    print(f"Total rows processed: {len(data)}")

# Call the main function
main()

import csv

def main():
    # Initialize empty lists for each column

    data = []

    # Open the file using the csv module
    with open("MEC2024Data.csv", "r") as f:
        reader = csv.reader(f)

        for i, row in enumerate(reader):

            #Split time
            time = row[6].split(":")
            row[6] = int(time[0])*60 + int(time[1])
            row[7] = int(row[7])

            ###----------Boolean Conversion-------------###
            if (row[8] == 'TRUE'):
                row[8] = True
            else:
                row[8] = False

            if (row[9] == 'TRUE'):
                row[9] = True
            else:
                row[9] = False


            ###-----------Empty space to Null or Int---------###
            if (row[10] != ''):
                row[10] = int(row[10])
            else:
                row[10] = None
            if (row[11] != ''):
                row[11] = int(row[11])
            else:
                row[11] = None

           #Append

            data.append(row)


            print(data[i])  # Print the current row

    # Example of what you could do next
    print(f"Total rows processed: {len(data)}")

#Call the main function
main()

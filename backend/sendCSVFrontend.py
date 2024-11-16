import csv
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
# Initialize Firebase

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()



def calc(data):
    cars = [][1000]
    count = 0
    for row in data:
        max = row[11]
        if row[3] == 'Driver':
            cars[count].append(row)
            print(cars)
            for row2 in data:
                if max == 0:
                    break
                elif row2[3] == 'Passenger':
                    print("d")
                    num = row2[10]
                    if (
                        max >= num and row[2] == row2[2]
                        and row[8] == row2[8] and row[9] == row2[9]
                    ):
                        cars.append(row2)
                        count += 1
                else: 
                    continue
        else:
            continue



def parse():


    data = []
    # Open the file using the csv module
    with open("MEC2024Data.csv", "r") as f:
        reader = csv.reader(f)

        for i, row in enumerate(reader):

            #Split time
            time = row[6].split(":")
            row[6] = int(time[0])*60 + int(time[1])
            row[7] = int(row[7])

            ###--------------Boolean Conversion-------------###
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
            #print(data[i])  # Print the current row

            calc(data)

            # Send each row to Firebase Firestore
            doc_ref = db.collection("parsed_csv_data").document(f"row_{i}")
            doc_ref.set({
                "data": row
            })

    print(f"Total rows processed: {len(data)}")

# Call the parse function
parse()

    

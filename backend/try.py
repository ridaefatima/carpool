import csv
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
# Initialize Firebase
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()


def main():
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

            # Send each row to Firebase Firestore
            doc_ref = db.collection("parsed_csv_data").document(f"row_{i}")
            doc_ref.set({
                "data": row
            })
            
            cars=[999][5]
            j = -1
            k = 0
            
            for i in range(len(data[i])):
                if data[i][2] == 'Driver':
                    j += 1
                    k = 0
                    cars[j][0] = data[i][0]
                if(data[i][7])
                
                elif data[i][2] == 'Passenger' and k <= data[i][11] and data[i][]:
                    k += 1
                    cars[j][k] = data[i][0]
            
            
            
    print(f"Total rows processed: {len(data)}")

# Call the main function
main()

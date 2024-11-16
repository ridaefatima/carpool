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
            time = row[6].split(":")
            row[6] = int(time[0]) * 60 + int(time[1])

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

            # Send each row to Firebase Firestore
            doc_ref = db.collection("parsed_csv_data").document(f"row_{i}")
            doc_ref.set({
                "data": row
            })

    print(f"Total rows processed: {len(data)}")

# Call the main function
main()

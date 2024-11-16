import heapq
from geopy.distance import geodesic

class Astar:
    def __init__(self, start_location, end_location, max_detour_distance, preferences):
        self.start_location = start_location
        self.end_location = end_location
        self.max_detour_distance = max_detour_distance
        self.preferences = preferences
        self.open_list = []
        self.closed_list = set()

    def heuristic(self, a, b):
        """Calculate the heuristic (straight-line distance) between two points."""
        return geodesic(a, b).km

    def get_neighbors(self, node):
        """Get neighboring nodes (in a real scenario, this would fetch nearby locations from the map)."""
        # For simplicity, let's assume a dummy set of neighbors
        # Replace with your own logic to get neighboring locations
        return [
            (node[0] + 0.01, node[1]),  # Move north
            (node[0] - 0.01, node[1]),  # Move south
            (node[0], node[1] + 0.01),  # Move east
            (node[0], node[1] - 0.01),  # Move west
        ]

    def get_distance(self, from_node, to_node):
        """Calculate the distance between two nodes."""
        return geodesic(from_node, to_node).km

    def reconstruct_path(self, came_from, current):
        """Reconstruct the path from start to goal."""
        path = []
        while current in came_from:
            path.append(current)
            current = came_from[current]
        path.append(self.start_location)
        path.reverse()
        return path

    def run(self):
        """Run the A* algorithm to find the best path."""
        # Priority queue to store nodes to visit
        heapq.heappush(self.open_list, (0, self.start_location))

        # Dictionary to store the cost of visiting each node
        g_costs = {self.start_location: 0}

        # Dictionary to store the best parent for each node
        came_from = {}

        while self.open_list:
            _, current_node = heapq.heappop(self.open_list)

            if current_node == self.end_location:
                # If we reached the goal, reconstruct the path
                return self.reconstruct_path(came_from, current_node)

            self.closed_list.add(current_node)

            for neighbor in self.get_neighbors(current_node):
                if neighbor in self.closed_list:
                    continue

                tentative_g_cost = g_costs[current_node] + self.get_distance(current_node, neighbor)

                if neighbor not in g_costs or tentative_g_cost < g_costs[neighbor]:
                    # Update the best path to this neighbor
                    came_from[neighbor] = current_node
                    g_costs[neighbor] = tentative_g_cost

                    # Calculate f = g + h (g is cost from start, h is heuristic to goal)
                    f_cost = tentative_g_cost + self.heuristic(neighbor, self.end_location)
                    heapq.heappush(self.open_list, (f_cost, neighbor))

        # If no path is found
        return None

# Example usage:
start_location = (37.7749, -122.4194)  # San Francisco (lat, lon)
end_location = (34.0522, -118.2437)   # Los Angeles (lat, lon)
max_detour_distance = 10  # Max detour in km
preferences = {
    "non_smoking": True,
    "same_gender": False,
    "number_of_persons": 1,
}

astar = Astar(start_location, end_location, max_detour_distance, preferences)
path = astar.run()

if path:
    print("Path found:")
    for step in path:
        print(step)
else:
    print("No path found.")

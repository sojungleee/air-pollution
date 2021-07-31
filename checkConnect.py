import subprocess
ps = subprocess.Popen(['iwconfig'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

def checkConnect():
	try:
		output = subprocess.check_output(('grep', 'ESSID'), stdin=ps.stdout)
		print(output)
		return 1
	except subprocess.CalledProcessError:
    		# grep did not match any lines
    		print("No wireless networks connected")
    		return 0

checkConnect()

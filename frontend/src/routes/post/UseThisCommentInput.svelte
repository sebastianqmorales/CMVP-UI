<script>
	import { Textarea, Button, Radio } from 'flowbite-svelte';
</script>

<form class="md:px-20 xl:px-40">
	<Textarea rows="3" class="mb-4" placeholder="Share your perspective.">
		<div slot="footer" class="flex items-center justify-between">
			<input
				class="bg-orange-500 hover:bg-orange-600 py-1 px-3 rounded-sm text-white cursor-pointer"
				type="submit"
				placeholder="Share"
			/>
			<div class="flex gap-3">
				<Radio name="custom" custom>
					<div
						class="inline-flex justify-center items-center px-4 py-1 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<div>
							<div class="text-md font-semibold">Agreeing</div>
						</div>
					</div>
				</Radio>
				<Radio name="custom" custom>
					<div
						class="inline-flex justify-center items-center px-4 py-1 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-gray-600 peer-checked:border-gray-700 peer-checked:text-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<div>
							<div class="text-md font-semibold">Neutral</div>
						</div>
					</div>
				</Radio>
				<Radio name="custom" custom>
					<div
						class="inline-flex justify-center items-center px-4 py-1 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<div>
							<div class="text-md font-semibold">Disagreeing</div>
						</div>
					</div>
				</Radio>
			</div>
		</div>
	</Textarea>
</form>
